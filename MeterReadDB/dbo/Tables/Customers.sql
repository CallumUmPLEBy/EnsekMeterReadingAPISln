CREATE TABLE [dbo].[Customers] (
    [ID]        INT            IDENTITY (1, 1) NOT NULL,
    [AccountID] INT            NOT NULL,
    [FirstName] NVARCHAR (250) NOT NULL,
    [LastName]  NVARCHAR (250) NOT NULL,
    CONSTRAINT [PK_Customers] PRIMARY KEY CLUSTERED ([ID] ASC)
);

