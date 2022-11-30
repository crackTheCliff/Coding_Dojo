class Vehicle
{
    private string Name;
    public string _Name
    {
        get { return Name; }
    }

    private int Passengers;
    public int _Passengers
    {
        get { return Passengers; }
    }

    private string Color;
    public string _Color
    {
        get { return Color; }
    }

    private bool HasEngine;
    public bool _HasEngine
    {
        get { return HasEngine; }
    }

    private int TopSpeed;
    public int _TopSpeed
    {
        get { return TopSpeed; }
    }

    private int Miles;
    public int _Miles
    {
        get { return Miles; }
        set { Miles = value; }
    }

    public Vehicle(string name, string color, int passengers, bool hasEngine, int topSpeed)
    {
        Name = name;
        Color = color;
        Passengers = passengers;
        HasEngine = hasEngine;
        TopSpeed = topSpeed;
        Miles = 0;
    }

    public Vehicle(string name, string color)
    {
        Name = name;
        Color = color;
        Passengers = 4;
        HasEngine = true;
        TopSpeed = 120;
        Miles = 0;
    }

    public void ShowInfo()
    {
        Console.WriteLine("Name: " + Name);
        Console.WriteLine("Color: " + Color);
        Console.WriteLine("Passengers: " + Passengers);
        Console.WriteLine("Has Engine? " + HasEngine);
        Console.WriteLine("Top Speed: " + TopSpeed + "mph");
        Console.WriteLine("Miles: " + Miles + "\n");
    }

    public void Travel(int distance)
    {
        Miles = Miles + distance;
        Console.WriteLine("Total miles traveled: " + Miles);
    }
}
