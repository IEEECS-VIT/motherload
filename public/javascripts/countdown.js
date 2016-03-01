/**
 * Created by Shivam Mathur on 09-05-2015.
 */
const d_hour = 24,h_min = 60,m_sec = 60;
var m_days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function get_time() {
    var current = new Date;
    var month = current.getMonth();
    var date = current.getDate();
    var hour = current.getHours();
    var mins = current.getMinutes();
    var sec = current.getSeconds();
    var days = 0;
    for (var i = 0; i < month; i++) {
        days += m_days[i];
    }
    return days * d_hour * h_min * m_sec + date * d_hour * h_min * m_sec + hour * h_min * m_sec + mins * m_sec + sec;

}

function countdown(){
    var time = function(){};
    var month = 9; //final month
    var date = 23; //final date
    var hour = 0;//final hour 0-23
    var mins = 0;//final minutes
    var sec = 0;//final seconds
    var year = 2016;
    var current = new Date;
    var currentYear = current.getFullYear();

    var days = 0; //total days left
    var temp;//To manage decimals e.g days = 100.3, above .5 decimal value results in negative deadline using Math.round()
    // Math.round(0.5) = 1 .
    for (var i = 0; i < month-1; i++) {
        days += m_days[i];
    }

    var time_deadline = days * d_hour * h_min * m_sec + date * d_hour * h_min * m_sec + hour * h_min * m_sec + mins * m_sec + sec;
    var deadline = time_deadline - get_time();
    days=0;
    for (i = current.getMonth(); i < month-1; i++) {
        days += m_days[i];
    }
    time.deadline = deadline;
    time.months = month - current.getMonth() -1;
    temp = ((deadline /(d_hour * h_min * m_sec))*10)%10;
    time.days = deadline /(d_hour * h_min * m_sec) - days;
    //time.days -= days +1;
    deadline -= time.days* d_hour * h_min * m_sec;
    temp = ((deadline /(h_min * m_sec))*10)%10;
    time.hour = deadline /(h_min * m_sec) - temp/10;
    deadline -= time.hour * h_min * m_sec;
    temp = ((deadline /( m_sec))*10)%10;
    time.mins = (deadline /(m_sec)) - temp/10;
    deadline -= time.mins * m_sec;
    time.sec = deadline;

    return time;
}