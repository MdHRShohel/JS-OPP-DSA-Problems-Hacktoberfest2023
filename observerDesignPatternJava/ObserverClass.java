package observerPattern;
import observerPattern.WeatherClass;
public class ObserverClass implements iWeatherObserver {
    WeatherClass weatherObserver;

    public ObserverClass(WeatherClass weatherObserver) {
    this.weatherObserver=weatherObserver;   
    }
    @Override
    public void Update() {
        System.out.println("There is an Update!");
        Display();
    }

    @Override
    public void Display() {
        System.out.println("The temperature is "+ weatherObserver.getTemperature());
    }
    
}
