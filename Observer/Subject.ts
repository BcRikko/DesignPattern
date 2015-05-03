interface ISubject {
    registerObserver: (o: IObserver) => void;
    removeObserver: (o: IObserver) => void;
    notifyObserver: () => void;
}
