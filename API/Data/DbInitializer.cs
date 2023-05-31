using API.Models;

namespace API.Data;

public static class DbInitializer
{
    public static void Initialize(StoreContext context)
    {
        if (context.Products.Any()) return;

        var products = new List<Product>()
        {
            new Product
            {
                Name = "Angular Speedster Board 2000",
                Description =
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                Price = 20000,
                PictureUrl = "https://res.cloudinary.com/drcfqqqab/image/upload/v1684415082/ecommerce/sb-ang1_pyatnk.png",
                Brand = "Angular",
                Type = "Boards",
                QuantityInStock = 100
            },
            new Product
            {
                Name = "Green Angular Board 3000",
                Description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                Price = 15000,
                PictureUrl = "https://res.cloudinary.com/drcfqqqab/image/upload/v1684415082/ecommerce/sb-ang2_divqvt.png",
                Brand = "Angular",
                Type = "Boards",
                QuantityInStock = 100
            },
            new Product
            {
                Name = "Core Board Speed Rush 3",
                Description =
                    "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
                Price = 18000,
                PictureUrl = "https://res.cloudinary.com/drcfqqqab/image/upload/v1684415083/ecommerce/sb-core1_yechee.png",
                Brand = "NetCore",
                Type = "Boards",
                QuantityInStock = 100
            },
            new Product
            {
                Name = "Net Core Super Board",
                Description =
                    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.",
                Price = 30000,
                PictureUrl = "https://res.cloudinary.com/drcfqqqab/image/upload/v1684415082/ecommerce/sb-core2_yqu5qj.png",
                Brand = "NetCore",
                Type = "Boards",
                QuantityInStock = 100
            },
            new Product
            {
                Name = "React Board Super Whizzy Fast",
                Description =
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                Price = 25000,
                PictureUrl = "https://res.cloudinary.com/drcfqqqab/image/upload/v1684415083/ecommerce/sb-react1_t5yxy6.png",
                Brand = "React",
                Type = "Boards",
                QuantityInStock = 100
            },
            new Product
            {
                Name = "Typescript Entry Board",
                Description =
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                Price = 12000,
                PictureUrl = "https://res.cloudinary.com/drcfqqqab/image/upload/v1684415083/ecommerce/sb-ts1_n7iwfd.png",
                Brand = "TypeScript",
                Type = "Boards",
                QuantityInStock = 100
            },
            new Product
            {
                Name = "Core Blue Hat",
                Description =
                    "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                Price = 1000,
                PictureUrl = "https://res.cloudinary.com/drcfqqqab/image/upload/v1684415082/ecommerce/hat-core1_hpnfrh.png",
                Brand = "NetCore",
                Type = "Hats",
                QuantityInStock = 100
            },
            new Product
            {
                Name = "Green React Woolen Hat",
                Description =
                    "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                Price = 8000,
                PictureUrl = "https://res.cloudinary.com/drcfqqqab/image/upload/v1684415082/ecommerce/hat-react1_rj0sqi.png",
                Brand = "React",
                Type = "Hats",
                QuantityInStock = 100
            },
            new Product
            {
                Name = "Purple React Woolen Hat",
                Description =
                    "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                Price = 1500,
                PictureUrl = "https://res.cloudinary.com/drcfqqqab/image/upload/v1684415082/ecommerce/hat-react2_czkhio.png",
                Brand = "React",
                Type = "Hats",
                QuantityInStock = 100
            },
            new Product
            {
                Name = "Blue Code Gloves",
                Description =
                    "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                Price = 1800,
                PictureUrl = "https://res.cloudinary.com/drcfqqqab/image/upload/v1684415081/ecommerce/glove-code1_op3k5z.png",
                Brand = "VS Code",
                Type = "Gloves",
                QuantityInStock = 100
            },
            new Product
            {
                Name = "Green Code Gloves",
                Description =
                    "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                Price = 1500,
                PictureUrl = "https://res.cloudinary.com/drcfqqqab/image/upload/v1684415081/ecommerce/glove-code2_kbfrtl.png",
                Brand = "VS Code",
                Type = "Gloves",
                QuantityInStock = 100
            },
            new Product
            {
                Name = "Purple React Gloves",
                Description =
                    "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                Price = 1600,
                PictureUrl = "https://res.cloudinary.com/drcfqqqab/image/upload/v1684415082/ecommerce/glove-react1_gwd7l7.png",
                Brand = "React",
                Type = "Gloves",
                QuantityInStock = 100
            },
            new Product
            {
                Name = "Green React Gloves",
                Description =
                    "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                Price = 1400,
                PictureUrl = "https://res.cloudinary.com/drcfqqqab/image/upload/v1684415082/ecommerce/glove-react2_rtktvm.png",
                Brand = "React",
                Type = "Gloves",
                QuantityInStock = 100
            },
            new Product
            {
                Name = "Redis Red Boots",
                Description =
                    "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
                Price = 25000,
                PictureUrl = "https://res.cloudinary.com/drcfqqqab/image/upload/v1684415081/ecommerce/boot-redis1_pnko2u.png",
                Brand = "Redis",
                Type = "Boots",
                QuantityInStock = 100
            },
            new Product
            {
                Name = "Core Red Boots",
                Description =
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                Price = 18999,
                PictureUrl = "https://res.cloudinary.com/drcfqqqab/image/upload/v1684415082/ecommerce/boot-core2_oofato.png",
                Brand = "NetCore",
                Type = "Boots",
                QuantityInStock = 100
            },
            new Product
            {
                Name = "Core Purple Boots",
                Description =
                    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.",
                Price = 19999,
                PictureUrl = "https://res.cloudinary.com/drcfqqqab/image/upload/v1684415081/ecommerce/boot-core1_t9zxn8.png",
                Brand = "NetCore",
                Type = "Boots",
                QuantityInStock = 100
            },
            new Product
            {
                Name = "Angular Purple Boots",
                Description = "Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.",
                Price = 15000,
                PictureUrl = "https://res.cloudinary.com/drcfqqqab/image/upload/v1684415081/ecommerce/boot-ang2_k30ldu.png",
                Brand = "Angular",
                Type = "Boots",
                QuantityInStock = 100
            },
            new Product
            {
                Name = "Angular Blue Boots",
                Description =
                    "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
                Price = 18000,
                PictureUrl = "https://res.cloudinary.com/drcfqqqab/image/upload/v1684415081/ecommerce/boot-ang1_f81b0e.png",
                Brand = "Angular",
                Type = "Boots",
                QuantityInStock = 100
            },
        };
        
        context.Products.AddRange(products);
        context.SaveChanges();
    }
}