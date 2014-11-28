module.exports = function(grunt) {

    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.initConfig({
        uglify: {
            dist: {
                options: {report: 'gzip'},
                src: "dist/angular-vision.js",
                dest: "dist/angular-vision.min.js"
            }
        }
    });
    grunt.registerTask("default", ['uglify']);
};