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
        set { Health = value; }
    }

    public List<Attack> Attacks;

    // public Enemy addAttack(Attack att)
    // {
    //     Attacks.Add(att);
    //     return this;
    // }

    public Enemy(string name, int health)
    {
        Name = name;
        Health = health;
        Attacks = new List<Attack>();
    }

    public void PrintInfo()
    {
        Console.WriteLine($"Enemy Name: {this._Name}\nEnemy Health : {this._Health}");
        foreach (Attack item in Attacks)
        {
            Console.WriteLine($"Attack: {item._Name} | Damage: {item._Damage}");
        }
    }

    public virtual void RandomAttack()
    {
        Random rand = new Random();
        int attackNumber = rand.Next(0, Attacks.Count);
        Console.WriteLine($"{Name} hit you with a {Attacks[attackNumber]._Name} for {Attacks[attackNumber]._Damage} damage!");
    }
}