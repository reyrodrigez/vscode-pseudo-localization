import * as vscode from 'vscode';

import tranformStringToPseudo from './pseudizer';

export function activate(context: vscode.ExtensionContext) {

    const disposable = vscode.commands.registerCommand('extension.pseudoLocalize', () => {
        const editor = vscode.window.activeTextEditor;
        const settings = vscode.workspace.getConfiguration('pseudo-localizer');

        if (!editor) {
            return;
        }

        const selection = editor.selection;
        const text = editor.document.getText(selection);
        
        if (!text) {
            return;
        }
        
        const pseudoText = settings.wrapper ? `[!!! ${tranformStringToPseudo(text)} !!!]` : tranformStringToPseudo(text) ;

        editor.edit(editBuilder => {
            editBuilder.delete(new vscode.Range(selection.start.line,selection.start.character,selection.end.line,selection.end.character));
            editBuilder.insert(new vscode.Position(selection.start.line, selection.start.character), pseudoText);
        });
    });

    context.subscriptions.push(disposable);
}
