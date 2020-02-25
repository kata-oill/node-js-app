'use strict';

process.stdin.setEncoding('utf-8');

console.log('Type /showVersion to display Node version, type /systemLanguage to display system language, type /exit to quit');

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    var instruction = input.toString().trim();
    var version = process.versions.node;
    var language = process.env.LANG;
    switch (instruction) {
	case '/exit':
		process.stdout.write('Quitting app!' + '\n');
        process.exit();
        break;
    case '/showVersion':
    	process.stdout.write('Node version: ' + version + '\n');
    	break;
    case '/systemLanguage':
    	process.stdout.write('Sysyem language: ' + language + '\n')
    	break;
    default: 
    	console.log('Wrong instruction!');
    	break;
	}
});