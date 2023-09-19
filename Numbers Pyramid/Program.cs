namespace Numbers_Pyramid
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int number=int.Parse(Console.ReadLine());

            int currentNumber = 1;
            bool isCurrent = true; 

            for (int i = 1; i <=number; i++)
            {
                for (int j = 1; j <=i ; j++)
                {
                    Console.Write($"{currentNumber} ");
                    currentNumber++;
                    if( currentNumber == number+1 )
                    {
                        isCurrent = false;
                        break;
                    }
                }
                Console.WriteLine();
                if (!isCurrent)
                {
                    break;
                }
            }

        }
    }
}