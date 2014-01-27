module.exports = function (grunt) {
    var pkgFile = grunt.file.readJSON('package.json'),
        banner =
            "/*          __              __\n" +
            " *   __    /\\ \\            /\\ \\\n" +
            " *  /\\_\\   \\_\\ \\    ___    \\_\\ \\     __   __  __\n" +
            " *  \\/\\ \\  /'_` \\  / __`\\  /'_` \\  /'__`\\/\\ \\/\\ \\ \n" +
            " *   \\ \\ \\/\\ \\L\\ \\/\\ \\L\\ \\/\\ \\L\\ \\/\\  __/\\ \\ \\_/ |\n" +
            " *    \\ \\_\\ \\___,_\\ \\____/\\ \\___,_\\ \\____\\\\ \\___/\n" +
            " *     \\/_/\\/__,_ /\\/___/  \\/__,_ /\\/____/ \\/__/\n" +
            " *\n" +
            " *  " + pkgFile.name + "\n" +
            " *  v" + pkgFile.version + "\n" +
            " *  " + pkgFile.description + "\n" +
            " *  Copyright " + grunt.template.today("yyyy") + "\n" +
            " */\n" +
            "\n";

	grunt.initConfig({
		pkg: pkgFile,
		sass: {
			dist: {
				files: {
					'css/style.min.css' : 'css/sass/style.scss'
				},
                options: {
                  style: 'compressed',
                  banner: banner
                }
			}
		},
        uglify: {
            app: {
                options: {
                    compress: {
                        drop_console: true
                    },
                    banner: banner
                },
                files: {
                    'js/app.min.js': 'js/app/*.js'
                }
            },
            vendor: {
                options: {
                    mangle: false,
                    banner: '/* Combined third part javascript libraries, for more info visit:\n * https://github.com/idodev/idodev.github.com/tree/master/js/vendor\n */\n\n'
                },
                files: {
                    "js/vendor.min.js":"js/vendor/*.js"
                }
            }
        },
		watch: {
			css: {
				files: 'css/**/*.scss',
				tasks: ['sass']
			},
            js_app: {
				files: 'js/app/*.js',
				tasks: ['uglify:app']
			},
            js_vendor: {
				files: 'js/vendor/*.js',
				tasks: ['uglify:vendor']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['sass', 'uglify', 'watch']);
};
