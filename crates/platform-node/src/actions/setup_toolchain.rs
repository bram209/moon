use moon_action::{Action, ActionContext, ActionStatus};
use moon_logger::debug;
use moon_toolchain::Tool;
use moon_workspace::{Workspace, WorkspaceError};
use std::sync::Arc;
use tokio::sync::RwLock;

const LOG_TARGET: &str = "moon:platform-node:setup-toolchain";
const SECOND: u128 = 1000;
const MINUTE: u128 = SECOND * 60;
const HOUR: u128 = MINUTE * 60;

pub async fn setup_toolchain(
    _action: &mut Action,
    _context: &ActionContext,
    workspace: Arc<RwLock<Workspace>>,
) -> Result<ActionStatus, WorkspaceError> {
    debug!(target: LOG_TARGET, "Setting up Node.js toolchain",);

    let mut workspace = workspace.write().await;
    let mut cache = workspace.cache.cache_workspace_state().await?;

    // Check that the tool has been configured
    workspace.toolchain.get_node()?;

    // Only check the versions every 12 hours, as checking every
    // run has considerable overhead spawning all the child processes.
    // Revisit the threshold if need be.
    let now = cache.now_millis();
    let check_versions = cache.item.last_version_check_time == 0
        || (cache.item.last_version_check_time + HOUR * 12) <= now;

    // Install Node.js tooling
    let mut node = workspace.toolchain.node.take().unwrap();
    let installed = node.run_setup(&workspace.toolchain, check_versions).await?;

    workspace.toolchain.node = Some(node);

    // Update the cache with the timestamp
    if check_versions {
        cache.item.last_version_check_time = now;
        cache.save().await?;
    }

    Ok(if installed > 0 {
        ActionStatus::Passed
    } else {
        ActionStatus::Skipped
    })
}
