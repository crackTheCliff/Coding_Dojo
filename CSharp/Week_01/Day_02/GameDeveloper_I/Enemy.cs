class Enemy
{
    private string Name;
    public string _Name
    {
        get { return Name; }
    }
    private int Health;
    public int _Health
    {
        get { return Health; }
    }

    public List<Attack> Attacks;
    List<Attack> attackList = new List<Attack>() {new Attack("Arrow shot", 20), new Attack("Back Stab", 100), new Attack("Lightning bolt", 50)};

    public Enemy addAttack(Attack att)
    {
        Attacks.Add(att);
        return this;
    }

    public Enemy(string name)
    {
        Name = name;
        Health = 100;
        Attacks = attackList;
    }

    public void RandomAttack()
    {
        Random rand = new Random();
        int attackNumber = rand.Next(0, attackList.Count);
        Console.WriteLine($"{Name} hit you with a {attackList[attackNumber]._Name} for {attackList[attackNumber]._Damage} damage!");
    }
}