export class Event {
  constructor (data){
    this.element = document.createElement('div');
    this.data = data;
    this.createElement();
  }
  createElement(){
    this.element.innerHTML=`
    <div class="box__event">
      <h3>${this.data.name}</h3>
      <button class="loadData">More</button>
    </div>
    `;
  }

  // const btnClick = 





}

