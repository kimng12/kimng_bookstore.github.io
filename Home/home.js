/*   RMIT University Vietnam
  Course: COSC2430 Web Programming
  Semester: 2023A
  Assessment: Assignment 1
  Author: Nguyen Ngoc Kim
  ID: s3970589
  Acknowledgement: No.
*/

const menuToggle = document.querySelector('.toggle')
const header = document.querySelector('.header')

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    header.classList.toggle('active')
})




