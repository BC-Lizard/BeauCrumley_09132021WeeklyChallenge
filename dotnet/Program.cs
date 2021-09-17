using System;
using System.Collections.Generic;
using System.Linq;

namespace _09132021
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> composite_numbers = new List<int>() {
                2,
                4,
                10,
                60,
                91,
                864,
                1200,
                1337
            };
            foreach (int number in composite_numbers)
            {
                Console.WriteLine(PrimeFact(number));
            }
        }

        static string PrimeFact(int comp_num)
        {
            int remaining = comp_num;
            bool is_prime = true;
            List<string> prime_factors = new List<string>();

            for (int i = 2; i < remaining/2 + 1; i++)
            {
                if (remaining % i == 0)
                {
                    is_prime = false;
                }
            }

            if (is_prime)
            {
                return $"{remaining}";
            }
            else
            {
                while (is_prime == false)
                {
                    is_prime = true;
                    for (int i = 2; i < remaining/2 + 1; i++)
                    {
                        if (remaining % i == 0)
                        {
                            is_prime = false;
                            prime_factors.Add($"{i}");
                            remaining = remaining/i;
                            break;
                        }
                    }
                }
                prime_factors.Add($"{remaining}");

                List<string> powered_factors = new List<string>();

                List<string> unique_factors = prime_factors.Distinct().ToList();

                foreach (string factor in unique_factors)
                {
                    if (prime_factors.Where(x => x == factor).Count() == 1)
                    {
                        powered_factors.Add(factor);
                    }
                    else
                    {
                        powered_factors.Add($"{factor} ^ {prime_factors.Where(x => x == factor).Count()}");
                    }
                }

                return String.Join(" x ", powered_factors);
            }
        }
    }
}
