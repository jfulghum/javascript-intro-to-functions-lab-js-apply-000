function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logwhisper(string){
  console.log(string.toUpperCase());
}

function sayHiToGrandma(string){
  if (string.toLowerCase() == string){
    return "I can't hear you!"
  } else if (string == "I love you, Grandma."){
    return "I love you, too."
  } else {
    return "YES INDEED!"
  }
}
