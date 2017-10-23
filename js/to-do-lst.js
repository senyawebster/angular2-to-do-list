$(document).ready(function() {

    var tasks = ['Finish weekend Angular homework for Epicodus course', 'Begin brainstorming possible JavaScript group projects', 'Add README file to last few Angular repos on GitHub'];

    tasks.forEach(function(currentTask) {
       $(".to-do-list").append(currentTask);
    });

});
