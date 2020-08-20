new Vue({
  el: '#app',
  computed: {
    searchData() {
          return this.data.filter(e => {
            return e.title.toLowerCase().includes(this.cari.toLowerCase())
          })
    }
  },
  watch: {
    cari() {
      if (this.cari.length >= 3 || this.cari.length == 0) {
        this.message = `Total gambar: ${this.searchData.length}`
      } else if(this.cari.length == 2 || this.cari.length == 1){
        this.message = `Min. 3 huruf!`
      }
    }
  },
  data: {
    cari: "",
    message: "",
    data: [
      {
        "albumId": 1,
        "id": 1,
        "title": "www",
        "url": "https://image.flaticon.com/icons/svg/332/332128.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/332/332128.svg"
      },
      {
        "albumId": 1,
        "id": 2,
        "title": "Computer",
        "url": "https://image.flaticon.com/icons/svg/332/332067.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/332/332067.svg"
      },
      {
        "albumId": 1,
        "id": 3,
        "title": "Javascript",
        "url": "https://image.flaticon.com/icons/svg/2621/2621226.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621226.svg"
      },
      {
        "albumId": 1,
        "id": 4,
        "title": "Agile",
        "url": "https://image.flaticon.com/icons/svg/2620/2620980.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/2620/2620980.svg"
      },
      {
        "albumId": 1,
        "id": 5,
        "title": "Algorithm",
        "url": "https://image.flaticon.com/icons/svg/2620/2620983.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/2620/2620983.svg"
      },
      {
        "albumId": 1,
        "id": 6,
        "title": "API Integration",
        "url": "https://image.flaticon.com/icons/svg/2620/2620987.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/2620/2620987.svg"
      },
      {
        "albumId": 1,
        "id": 7,
        "title": "Programming",
        "url": "https://image.flaticon.com/icons/svg/2620/2620993.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/2620/2620993.svg"
      },
      {
        "albumId": 1,
        "id": 8,
        "title": "Backup",
        "url": "https://image.flaticon.com/icons/svg/2620/2620996.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/2620/2620996.svg"
      },
      {
        "albumId": 1,
        "id": 9,
        "title": "Unit Testing",
        "url": "https://image.flaticon.com/icons/svg/2621/2621000.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621000.svg"
      },
      {
        "albumId": 1,
        "id": 10,
        "title": "Budget",
        "url": "https://image.flaticon.com/icons/svg/2621/2621007.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621007.svg"
      },
      {
        "albumId": 1,
        "id": 11,
        "title": "Bug",
        "url": "https://image.flaticon.com/icons/svg/2621/2621008.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621008.svg"
      },
      {
        "albumId": 1,
        "id": 12,
        "title": "Debug",
        "url": "https://image.flaticon.com/icons/svg/2621/2621010.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621010.svg"
      },
      {
        "albumId": 1,
        "id": 13,
        "title": "Developer",
        "url": "https://image.flaticon.com/icons/svg/2621/2621024.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621024.svg"
      },
      {
        "albumId": 1,
        "id": 14,
        "title": "Coding C#",
        "url": "https://image.flaticon.com/icons/svg/2621/2621029.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621029.svg"
      },
      {
        "albumId": 1,
        "id": 15,
        "title": "Cloud Coding",
        "url": "https://image.flaticon.com/icons/svg/2621/2621034.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621034.svg"
      },
      {
        "albumId": 1,
        "id": 16,
        "title": "Cloud Computing",
        "url": "https://image.flaticon.com/icons/svg/2621/2621037.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621037.svg"
      },
      {
        "albumId": 1,
        "id": 17,
        "title": "Refactoring",
        "url": "https://image.flaticon.com/icons/svg/2621/2621041.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621041.svg"
      },
      {
        "albumId": 1,
        "id": 18,
        "title": "Coding Language",
        "url": "https://image.flaticon.com/icons/svg/2621/2621043.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621043.svg"
      },
      {
        "albumId": 1,
        "id": 19,
        "title": "Collaboration",
        "url": "https://image.flaticon.com/icons/svg/2621/2621049.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621049.svg"
      },
      {
        "albumId": 1,
        "id": 20,
        "title": "Command Line",
        "url": "https://image.flaticon.com/icons/svg/2621/2621054.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621054.svg"
      },
      {
        "albumId": 1,
        "id": 21,
        "title": "Console",
        "url": "https://image.flaticon.com/icons/svg/2621/2621058.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621058.svg"
      },
      {
        "albumId": 1,
        "id": 22,
        "title": "CSS",
        "url": "https://image.flaticon.com/icons/svg/2621/2621063.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621063.svg"
      },
      {
        "albumId": 1,
        "id": 23,
        "title": "Rating",
        "url": "https://image.flaticon.com/icons/svg/2621/2621068.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621068.svg"
      },
      {
        "albumId": 1,
        "id": 24,
        "title": "Customer Review",
        "url": "https://image.flaticon.com/icons/svg/2621/2621073.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621073.svg"
      },
      {
        "albumId": 1,
        "id": 25,
        "title": "Dashboard",
        "url": "https://image.flaticon.com/icons/svg/2621/2621084.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621084.svg"
      },
      {
        "albumId": 1,
        "id": 26,
        "title": "Interface",
        "url": "https://image.flaticon.com/icons/svg/2621/2621091.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621091.svg"
      },
      {
        "albumId": 1,
        "id": 27,
        "title": "Interfaces",
        "url": "https://image.flaticon.com/icons/svg/2621/2621100.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621100.svg"
      },
      {
        "albumId": 1,
        "id": 28,
        "title": "Data Security",
        "url": "https://image.flaticon.com/icons/svg/2621/2621105.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621105.svg"
      },
      {
        "albumId": 1,
        "id": 29,
        "title": "Settings",
        "url": "https://image.flaticon.com/icons/svg/2621/2621147.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621147.svg"
      },
      {
        "albumId": 1,
        "id": 30,
        "title": "Database",
        "url": "https://image.flaticon.com/icons/svg/2621/2621107.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621107.svg"
      },
      {
        "albumId": 1,
        "id": 31,
        "title": "Deadline",
        "url": "https://image.flaticon.com/icons/svg/2621/2621112.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621112.svg"
      },
      {
        "albumId": 1,
        "id": 32,
        "title": "Dependencies",
        "url": "https://image.flaticon.com/icons/svg/2621/2621122.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621122.svg"
      },
      {
        "albumId": 1,
        "id": 33,
        "title": "Deployment",
        "url": "https://image.flaticon.com/icons/svg/2621/2621127.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621127.svg"
      },
      {
        "albumId": 1,
        "id": 34,
        "title": "Edit Code",
        "url": "https://image.flaticon.com/icons/svg/2621/2621153.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621153.svg"
      },
      {
        "albumId": 1,
        "id": 35,
        "title": "Error",
        "url": "https://image.flaticon.com/icons/svg/2621/2621158.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621158.svg"
      },
      {
        "albumId": 1,
        "id": 36,
        "title": "Request",
        "url": "https://image.flaticon.com/icons/svg/2621/2621170.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621170.svg"
      },
      {
        "albumId": 1,
        "id": 37,
        "title": "Framework",
        "url": "https://image.flaticon.com/icons/svg/2621/2621174.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621174.svg"
      },
      {
        "albumId": 1,
        "id": 38,
        "title": "Designer",
        "url": "https://image.flaticon.com/icons/svg/2621/2621182.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621182.svg"
      },
      {
        "albumId": 1,
        "id": 39,
        "title": "Programmer",
        "url": "https://image.flaticon.com/icons/svg/2621/2621196.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621196.svg"
      },
      {
        "albumId": 1,
        "id": 40,
        "title": "HTML",
        "url": "https://image.flaticon.com/icons/svg/2621/2621200.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621200.svg"
      },
      {
        "albumId": 1,
        "id": 41,
        "title": "Java",
        "url": "https://image.flaticon.com/icons/svg/2621/2621217.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621217.svg"
      },
      {
        "albumId": 1,
        "id": 42,
        "title": "Icons",
        "url": "https://image.flaticon.com/icons/svg/2621/2621206.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621206.svg"
      },
      {
        "albumId": 1,
        "id": 43,
        "title": "Innovation",
        "url": "https://image.flaticon.com/icons/svg/2621/2621210.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621210.svg"
      },
      {
        "albumId": 1,
        "id": 44,
        "title": "Integrated",
        "url": "https://image.flaticon.com/icons/svg/2621/2621216.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621216.svg"
      },
      {
        "albumId": 1,
        "id": 45,
        "title": "UI Design",
        "url": "https://image.flaticon.com/icons/svg/1488/1488590.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/1488/1488590.svg"
      },
      {
        "albumId": 1,
        "id": 46,
        "title": "E-Learning",
        "url": "https://image.flaticon.com/icons/svg/1488/1488544.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/1488/1488544.svg"
      },
      {
        "albumId": 1,
        "id": 47,
        "title": "Boolean",
        "url": "https://image.flaticon.com/icons/svg/1488/1488531.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/1488/1488531.svg"
      },
      {
        "albumId": 1,
        "id": 48,
        "title": "Processor",
        "url": "https://image.flaticon.com/icons/svg/1488/1488579.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/1488/1488579.svg"
      },
      {
        "albumId": 1,
        "id": 49,
        "title": "AI",
        "url": "https://image.flaticon.com/icons/svg/1488/1488527.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/1488/1488527.svg"
      },
      {
        "albumId": 1,
        "id": 50,
        "title": "Hackathon",
        "url": "https://image.flaticon.com/icons/svg/1488/1488562.svg",
        "thumbnailUrl": "https://image.flaticon.com/icons/svg/1488/1488562.svg"
      }
    ]
  }
})