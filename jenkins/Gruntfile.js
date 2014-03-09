module.exports = function(grunt) {
  grunt.initConfig({
    jenkins: {
      serverAddress: 'http://192.168.33.214:8080',
      pipelineDirectory: 'jenkins-configuration'
    }
  })
  grunt.loadNpmTasks('grunt-jenkins');
  grunt.registerTask('default', ['jenkins-list']);
};
