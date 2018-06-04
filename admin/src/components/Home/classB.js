import ClassA from './classA'
class ClassB extends ClassA{
  constructor(props){
    super(props)
    console.log(123)
  }
  print() {
    console.log(111)
  }
}

export default new ClassB()