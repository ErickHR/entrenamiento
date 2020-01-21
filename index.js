'use strict';
computer.onclick = () => {
    let tempWeeklyReports = document.querySelector('#tempWeeklyReports')

    let i = tempWeeklyReports.content.querySelectorAll('i')

    let weeklyReports = document.querySelector('#weeklyReports')
    weeklyReports.appendChild(document.importNode(tempWeeklyReports.content, true))
}
