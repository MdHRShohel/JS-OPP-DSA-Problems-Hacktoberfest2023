package observerPattern;

public interface iWeatherObservable {

    public void addObserver(ObserverClass observer);

    public void removeObserver(ObserverClass observer);
    
    public void notifyObserver();


}
