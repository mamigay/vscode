/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

pub mod code_server;
pub mod dev_tunnels;
pub mod legal;
pub mod paths;
pub mod shutdown_signal;
pub mod singleton_client;
pub mod singleton_server;

mod control_server;
mod nosleep;
#[cfg(target_os = "linux")]
mod nosleep_linux;
#[cfg(target_os = "macos")]
mod nosleep_macos;
#[cfg(target_os = "windows")]
mod nosleep_windows;
mod port_forwarder;
mod protocol;
mod server_bridge;
mod server_multiplexer;
mod service;
#[cfg(target_os = "linux")]
mod service_linux;
#[cfg(target_os = "macos")]
mod service_macos;
#[cfg(target_os = "windows")]
mod service_windows;
mod socket_signal;
mod wsl_server;

pub use control_server::{serve, Next};
pub use nosleep::SleepInhibitor;
pub use service::{
	create_service_manager, ServiceContainer, ServiceManager, SERVICE_LOG_FILE_NAME,
};
pub use wsl_server::serve_wsl;
