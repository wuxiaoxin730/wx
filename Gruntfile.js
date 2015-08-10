module.exports = function(grunt){
	grunt.registerTask('default','My Custom Task',function(){
		grunt.log.write('I log msg here to see what happen. Now time is: <%= grunt.template.today("yyyy-mm-dd")%>').ok();
	});
};