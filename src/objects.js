const user = {
  name: "John",
  age: 30,
  address: {
    city: "London",
    country: "UK"
  },
  skills: ["JS", "Testing", "Git"],
  printSummary: function () {
    console.log("Name:", this.name);
    console.log("Age:", this.age);
    console.log("City:", this.address.city);
    console.log("Country:", this.address.country);
    console.log("Skills:", this.skills.join(", "));
    this.skills.forEach((skill, i) => {
      console.log("Skill", i + 1, "-", skill);
    });
  }
};

user.printSummary();
