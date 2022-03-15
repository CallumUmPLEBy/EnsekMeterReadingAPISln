CREATE TABLE [dbo].[MeterReads] (
    [ID]                   INT           IDENTITY (1, 1) NOT NULL,
    [AccountID]            INT           NOT NULL,
    [MeterReadingDateTime] DATETIME2 (7) NOT NULL,
    [MeterReadValue]       NVARCHAR (50) NULL,
    CONSTRAINT [PK_MeterReads] PRIMARY KEY CLUSTERED ([ID] ASC)
);

