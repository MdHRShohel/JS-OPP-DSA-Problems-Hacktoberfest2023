
var can;
var c;

var arr;

var algoritm;

var frameCount;
var speed;

var elements; //for mergeSort(drawing)

var atElement; //for insertionSort

var callWith; //for quickSort
var callWith_;

var buckets; //for radixSort
var longest;

window.onload = function(){
  can = document.getElementById("c");
  can.width = can.height = 360;
  c = can.getContext("2d");
  
  
  reset(0, 2.5);
  speed = document.getElementById("speed").value;
  
  animate();
}


function reset(algo, length){
  c.fillStyle = "#000000";
 c.fillRect(0,0,can.width,can.height);
  
  frameCount = 1;
  if(length != -1){
	elements = parseInt(length*length*length*length); //makes it seem more "natural"
	document.getElementById("elementsText").innerHTML = "elements: " + elements;
  }
  arr = [];
  for(var i=0;i<elements;i++){
	arr.push(new Number(parseInt(Math.random()*can.height)));
  }
  if(algo == 0){
	algoritm = "bubbleSort";
  }else if(algo == 1){
	algoritm = "mergeSort";
  }else if(algo == 2){
	algoritm = "insertionSort";
  }else if(algo == 3){
	algoritm = "selectionSort";
  }else if(algo == 4){
	algoritm = "quickSort";
  }else if(algo == 5){
	algoritm = "radixSort";
  }else if(algo == 6){
   algoritm = "bogoSort";
  }else{
	
  }
  /*
	insertionSort
	mergeSort
	bubbleSort
	selectionSort
	quickSort
	radixSort
   bogoSort
  */


  //for mergeSort
  if(algoritm == "mergeSort"){
	for(var i=0;i<arr.length;i++){
	  arr[i] = [arr[i]];
	}
  }

  //for insertionSort  or  radixSort
  atElement = 0;

  //for quickSort
  callWith = [[0, arr.length]];
  callWith_ = [];

  //for radixSort
  buckets = []; 
  var bucket = [];
  for(var i=0;i<10;i++){
	bucket = [];
	buckets.push(bucket);
  }
  longest = 1;
  for(var i=0;i<arr.length;i++){
	if(arr[i].val > longest){
	  longest = ("" + arr[i].val).length + 1;
	}
  }
}


function animate(){
  speed = document.getElementById("speed").value;
  document.getElementById("speedText").innerHTML = "speed: 1/" + speed + " iteration/frame";
  c.fillStyle = "#000000";
 c.fillRect(0,0,can.width,can.height);

  var drawAt = 0;
  for(var i=0;i<arr.length;i++){
	if(algoritm == "mergeSort"){
	  for(var j=0;j<arr[i].length;j++){
		arr[i][j].show(drawAt);
		drawAt++;
	  }
	}else{
	  arr[i].show(i);
	}
  }


  if(frameCount % speed == 0){
	if(algoritm == "bubbleSort"){
	  for(var i=0;i<arr.length-1;i++){
		if(arr[i].val > arr[i+1].val){
		  var holder = arr[i];
		  arr[i] = arr[i+1];
		  arr[i+1] = holder;
		}
	  }
	  
	}else if(algoritm == "insertionSort"){
	  if(atElement >= elements){
		atElement = elements-1;
	  }
	  var at = atElement;
	  while(needToSwap(at-1, at)){
		var holder = arr[at];
		arr[at] = arr[at-1];
		arr[at-1] = holder;
		at--;
	  }
	  atElement++;

	}else if(algoritm == "mergeSort"){
	  var arr_ = [];
	  if(arr.length > 1){
		for(var i=0;i<arr.length;i+=2){
		  if(i != arr.length-1){
			arr_.push(merge(arr[i], arr[i+1]));
		  }else{
			arr_[arr_.length-1] = merge(arr_[arr_.length-1], arr[i]);
		  }
		}
		arr = arr_;
	  }

	}else if(algoritm == "selectionSort"){
	  if(atElement >= elements){
		atElement = elements-1;
	  }
	  var at = findSmallestUpwards(atElement);
	  
	  var holder = arr[at];
	  arr[at] = arr[atElement];
	  arr[atElement] = holder;
	  
	  atElement++;
	  
	}else if(algoritm == "quickSort"){
	  for(var i=0;i<callWith.length;i++){
		sortQuick(callWith[i][0], callWith[i][1]);
	  }
	  callWith = callWith_;
	  callWith_ = [];
	}else if(algoritm == "radixSort"){
	  
	  if(atElement <= longest){
		for(var i=0;i<arr.length;i++){
		  buckets[getDigitValue(atElement, arr[i].val, longest)].push(arr[i]);
		}
		var at = 0;
		for(var i=0;i<buckets.length;i++){
		  for(var j=0;j<buckets[i].length;j++){
			arr[at] = buckets[i][j];
			at++;
		  }
		  buckets[i] = [];
		}
	  }
	  atElement++;
	}else if(algoritm == "bogoSort"){
	 if(!isSorted()){
		randomConfiguration();
	 }
	 //console.log(arr);
	}
  }


  frameCount++;
  requestAnimationFrame(animate);
}


//for selectionSort
function findSmallestUpwards(x){
  var index = x;
  for(var i=x;i<arr.length;i++){
	if(arr[i].val < arr[index].val){
	  index = i;
	}
  }
  return index;
}

//for insertionSort
function needToSwap(at1, at2){
  if(at1 >= 0 && at2 >= 0){
	return (arr[at1].val > arr[at2].val);
  }else{
	return false;
  }
}

//for mergeSort
function merge(arr1, arr2){
  var result = [];
  var index1 = 0;
  var index2 = 0;
  if(arr1[arr1.length-1].val > arr2[arr2.length-1].val){
	while(index2 < arr2.length){
	  if(arr2[index2].val > arr1[index1].val){
		result.push(arr1[index1]);
		index1++;
	  }else{
		result.push(arr2[index2]);
		index2++;
	  }
	}
	while(index1 < arr1.length){
	  result.push(arr1[index1]);
		index1++;
	}
  }else{
	while(index1 < arr1.length){
	  if(arr1[index1].val > arr2[index2].val){
		result.push(arr2[index2]);
		index2++;
	  }else{
		result.push(arr1[index1]);
		index1++;
	  }
	}
	while(index2 < arr2.length){
	  result.push(arr2[index2]);
		index2++;
	}
  }
  return result;
}

//for quickSort (so you can show step by step)
function sortQuick(index1, index2){
  if(index2 - index1 > 1){
	var pivotIndex = index1;
	for(var i=index1+1;i<index2;i++){
	  if(arr[pivotIndex].val >= arr[i].val){
		var holder = arr[i];
		for(var j=i;j>pivotIndex;j--){
		  arr[j] = arr[j-1];
		}
		arr[pivotIndex] = holder;
		pivotIndex++;
	  }
	}
	callWith_.push([index1, pivotIndex]);
	callWith_.push([pivotIndex+1, index2]);
  }
}

//for radixSort
function getDigitValue(digit, val, l){
  var value = parseInt(val);
  for(var i=0;i<l;i++){
	if(i == digit){
	  return parseInt(value%10);
	}
	value = parseInt(value/10);
  }
  return 0;
}

//for bogoSort
function isSorted(){
  for(var i=0;i<arr.length-1;i++){
	if(arr[i].val > arr[i+1].val){
	  return false;
	}
  }
  return true;
}
function randomConfiguration(){
  for(var i=0;i<arr.length;i++){
	var holder = arr[i];
	var index = parseInt(Math.random() * (arr.length-1));
	arr[i] = arr[index];
	arr[index] = holder;
  }
}



function Number(val){
  this.val = val;
  this.show = function(x){
	c.fillStyle = "hsl(" + this.val + ", 100%, 50%)";
	c.fillRect(x*360/elements,360-this.val,parseInt(360/elements+1),this.val);
  }
}
