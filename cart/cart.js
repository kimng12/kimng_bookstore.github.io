/*
  RMIT University Vietnam
  Course: COSC2430 Web Programming
  Semester: 2023A
  Assessment: Assignment 1
  Author: Nguyen Ngoc Kim
  ID: s3970589
  Acknowledgement: The idea of buttons function was recieved by chatGPT.
*/



document.addEventListener('DOMContentLoaded', function() {
    var orderBtn = document.querySelector('.button');
    orderBtn.addEventListener('click', function() {
        alert('Your book is added to cart! Thank you so much <3');
    });
});