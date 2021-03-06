﻿interface IModel
{
  Id?: number;
}

interface IStockItem extends IModel
{
  Name: string;
  StockGroupId: number;
  StockGroup?: string;
  Quantity: number;
  Reorder: number;
}

interface IStockGroup extends IModel
{
  Name: string;
}

interface IStockAdjust
{
  Id: number;
  Quantity: number;
}

interface IAuditEntry<T> extends IModel
{
  AuditType: number;
  Message: string;
  Timestamp: string;
  OriginalData?: T;
  NewData?: T;
}

interface IAuditInfo
{
  Icon: string;
  Colour: string;
  Title: string;
}

interface IModalDialog
{
  Id: string;
  Title: string;
  Message: string;
  OnClick: string;
  ButtonLabel: string;
}
