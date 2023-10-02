package observerPattern;

import java.util.ArrayList;
import java.util.List;

public class WeatherClass implements iWeatherObservable{

    private String temperature;
    List<ObserverClass> observerList=new ArrayList<ObserverClass>();

    @Override
    public void addObserver(ObserverClass observer) {
        observerList.add(observer);
    }

    @Override
    public void removeObserver(ObserverClass observer) {
        observerList.remove(observer);
    }

    @Override
    public void notifyObserver() {
        for (ObserverClass observerClass : observerList) {
            observerClass.Update();
            
        }
       
    }
    
    public String getTemperature() {
        return temperature;
    }

    public void setTemperature(String temperature) {
        this.temperature=temperature;
        //System.out.println("New Temperature!");
        notifyObserver();
    }


}
