const debug = require('debug')('doop:slack');
debug('Init gulp slack');

const gulp = require('gulp');

gulp.task.once('load:app.slack', gulp.series('load:app'), ()=>
	app.emit('load:slack')
);
