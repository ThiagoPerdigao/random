const path = require('path');
const { task, src, dest } = require('gulp');

task('build:icons', copyIcons);

function copyIcons() {
	const nodeSource = path.resolve('nodes', '**', '*.{png,svg}');
	const nodeDestination = path.resolve('dist', 'nodes');

	// Copia ícones de nodes (sempre deve existir)
	src(nodeSource, { allowEmpty: true }).pipe(dest(nodeDestination));

	const credSource = path.resolve('credentials', '**', '*.{png,svg}');
	const credDestination = path.resolve('dist', 'credentials');

	// Copia ícones de credenciais (só se a pasta existir, não quebra se não tiver)
	return src(credSource, { allowEmpty: true }).pipe(dest(credDestination));
	}
