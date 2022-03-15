using Microsoft.EntityFrameworkCore.Migrations;

namespace EnsekMeterReadingAPI.Migrations
{
    public partial class ModelChanges : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_MeterReads",
                table: "MeterReads");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Customers",
                table: "Customers");

            migrationBuilder.AddColumn<int>(
                name: "ID",
                table: "MeterReads",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddColumn<int>(
                name: "ID",
                table: "Customers",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_MeterReads",
                table: "MeterReads",
                column: "ID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Customers",
                table: "Customers",
                column: "ID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_MeterReads",
                table: "MeterReads");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Customers",
                table: "Customers");

            migrationBuilder.DropColumn(
                name: "ID",
                table: "MeterReads");

            migrationBuilder.DropColumn(
                name: "ID",
                table: "Customers");


            migrationBuilder.AddPrimaryKey(
                name: "PK_MeterReads",
                table: "MeterReads",
                column: "AccountID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Customers",
                table: "Customers",
                column: "AccountID");
        }
    }
}
