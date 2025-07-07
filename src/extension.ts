import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('CIX Language Support extension is now active!');
    
    // Register any additional functionality here
    // For now, the language support is provided through the grammar files
}

export function deactivate() {
    console.log('CIX Language Support extension is now deactivated!');
}