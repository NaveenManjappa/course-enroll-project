

using EnrollCourse.Core.Entities;
using EnrollCourse.Data;
using EnrollCourse.Service;
using Microsoft.EntityFrameworkCore;
using System;
using UaccDemoContext = EnrollCourse.Data.UaccDemoContext;

namespace EnrollCourse.API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            var configuration = builder.Configuration;

            //Add DB context
            builder.Services.AddDbContext<UaccDemoContext>(options =>
            {
                options.UseSqlServer(
                configuration.GetConnectionString("DbContext"),
                provideroptions => provideroptions.EnableRetryOnFailure());
                //options.EnableSensitiveDataLogging();
                
            });

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            //Configure DI
            builder.Services.AddScoped<ICourseCategoryRepository,CourseCategoryRepository>();
            builder.Services.AddScoped<ICourseCategoryService, CourseCategoryService>();
           
            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
