const vscode = require('vscode');

function activate(context) {
	console.log('Congratulations, your extension "markdown-preview-download" is now active!');

	let disposable = vscode.commands.registerCommand('markdown-preview-download.helloWorld', function () {
		vscode.window.showInformationMessage('Hello World from Markdown Preview Download!');
	});

	context.subscriptions.push(disposable);

}


function deactivate() {}

module.exports = {
	activate,
	deactivate
}
