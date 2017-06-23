module.exports = function main(string s) {
  int i = Integer.parseInt(s);
  int a=10,b,t=0;
  do{
  b= i % a;
    i=(i-b)/10;
    t=t+b;  
  }while(i!=0);
  return t;

};
