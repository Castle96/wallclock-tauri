#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

#[tauri::command]
fn get_time() -> String {
    use chrono::Local;
    Local::now().format("%H:%M:%S").to_string()
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![get_time])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
