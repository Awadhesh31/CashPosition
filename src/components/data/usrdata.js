const User = {
    peopleYou: [
        {people: 1, image: 'panda.jpg', name: 'Rahul Bairwa'},
        {people: 2, image: 'panda.jpg', name: 'Hemankur Mohar'},
        {people: 3, image: 'panda.jpg', name: 'Sakshi Singla'},
        {people: 4, image: 'ProfilePhoto.jpg', name: 'Awadhesh Kumar'}
    ],
    all: function () { return this.peopleYou},
    get: function(id){
      const isPeople = u => u.people === id
      return this.peopleYou.find(isPeople)
    }
  
  }
  
  export default User;