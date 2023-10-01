package observerPattern;
import java.util.*;
import java.util.concurrent.TimeUnit;  

class mainClass {

    private WeatherClass weatherClass;
    private ObserverClass observerClass;
    public static void main(String[] args) {
        mainClass clazz = new mainClass();
        clazz.mainWork();
        
    }
    
    private void mainWork() {
        weatherClass=new WeatherClass();
        observerClass=new ObserverClass(weatherClass);
        weatherClass.addObserver(observerClass);
        giveWeatherData();
       
    }
    private void giveWeatherData() {
        int min = 20;  
        int max = 40;  
        for (int i=0; i<30;i++) {
            try{
            TimeUnit.SECONDS.sleep(1);
            }
            catch(Exception e){
                System.out.println(e.getMessage());
            }
      double random =  Math.random()*(max-min+1)+min;    
      weatherClass.setTemperature(String.valueOf(random));
        }
    }
}