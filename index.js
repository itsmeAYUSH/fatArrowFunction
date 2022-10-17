class student {
    static count = 0;
    constructor(name, age, phone_number, marks) {
        this.name = name;
        this.age = age;
        this.phone_number = phone_number;
        this.marks = marks;
        student.countStudent();
    }
    static countStudent() {
        return (student.count++);
    }
     eligible () {
        if(this.marks<40){
            console.log(`${this.name} is not eligible`)
        }else{
            console.log(`${this.name} is eligible`);
        }
    }
    eligibleForPlacements(minPlacementAge) {
        return  (minMarks) => {
            if (this.marks > minMarks && this.age > minPlacementAge) {
                console.log(this.name + " is ready for placements")
            } else {
                console.log(this.name + " is not ready for placements")
            }
        }

    }
}

const ayush = new student('Ayush', 21, 1234567812, 80);
const ashish = new student('Ashish', 25, 1236547818, 90);
const rishav = new student('Rishav', 21, 1236547181, 60);
const om = new student('Om', 22, 1236645181, 30);
const shanti = new student('Shanti', 18, 1236537555, 40);
console.log(student.countStudent());

ayush.eligible();
ashish.eligible(); 
rishav.eligible();
om.eligible();
shanti.eligible();

ayush.eligibleForPlacements(20)(70);
ashish.eligibleForPlacements(20)(70);
rishav.eligibleForPlacements(20)(70);
om.eligibleForPlacements(20)(70);
shanti.eligibleForPlacements(20)(70);
