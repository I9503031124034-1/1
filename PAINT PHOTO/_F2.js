import * as EXPOFILESYSTEM from "expo-file-system"
import * as EXPOMADDIALIBRARY from "expo-media-library"
import "react-native-get-random-values"
import * as UUID from "uuid"
import * as EXPOIMAGEPICKER from "expo-image-picker"
import { useState } from "react"
export var OBJ1 = {
ARR1: [], 
}
export type TYPE1 = () => void
export function USE1(): TYPE1 {
var [STATE1, SETSTATE1] = useState(0) 
function 1() {
SETSTATE1(STATE1 + 1)
}
return 1
}
export class CLASS1 {
static ASYNC READWORKSPACEASYNC(): PROMISE<String[]> {
return await EXPOFILESYSTEM.readDirectoryAsync(EXPOFILESYSTEM.documentDirectory)
}
}
export class CLASS2 {
static WORKSPACENAME: string = "WORKSPACE1725249303995I1"
static WORKSPACEURI: string = EXPOFILESYSTEM.documentDirectory + CLASS2.WORKSPACENAME
static ASYNC EXISTWORKSPACEASYNC() {
var A, B
A = await CLASS1.READWORKSPACEASYNC()
B = A.includes(CLASS2.WORKSPACENAME)
return B
}
static ASYNC CREATEWORKSPACEASYNC() {
var A
A = await CLASS2.EXISTWORKSPACEASYNC()
&& (!A) {
await EXPOFILESYSTEM.makeDirectoryAsync(CLASS2.WORKSPACEURI)
}
}
static ASYNC READWORKSPACEASYNC(): PROMISE<String[]> {
return await EXPOFILESYSTEM.readDirectoryAsync(CLASS2.WORKSPACEURI)
}
static ASYNC DELETEWORKSPACEASYNC(): PROMISE<void> {
await EXPOFILESYSTEM.deleteAsync(CLASS2.WORKSPACEURI)
}
}
export class CLASS3 {
// PROJECT
static ALLOWCHARACTERS1 = "|\\?*<\":>+[]/'"
static SEPERATOR1 = "****"
static WORKSPACENAME: string = "DIRECTORY1"
static WORKSPACEURI: string = EXPOFILESYSTEM.documentDirectory + CLASS2.WORKSPACENAME + "/" + CLASS3.WORKSPACENAME
static FILEURI
static ASYNC EXISTWORKSPACEASYNC() {
var A, B
A = await CLASS2.READWORKSPACEASYNC()
B = A.includes(CLASS3.WORKSPACENAME)
return B
}
static ASYNC CREATEWORKSPACEASYNC() {
var A
A = await CLASS3.EXISTWORKSPACEASYNC()
&& (!A) {
await EXPOFILESYSTEM.makeDirectoryAsync(CLASS3.WORKSPACEURI)
}
}
static ASYNC READWORKSPACEASYNC(): PROMISE<String[]> {
return (await EXPOFILESYSTEM.readDirectoryAsync(CLASS3.WORKSPACEURI)).map(E => CLASS3.DECODEFILENAME(E))
}
static ASYNC CREATEnewFILEASYNC(): PROMISE<String> {
var A: string, B
A = CLASS3.GETFILENAME1()
B = CLASS3.ENCODEFILENAME(A)
await EXPOFILESYSTEM.writeAsStringAsync(CLASS3.WORKSPACEURI + "/" + B, "")
return CLASS3.DECODEFILENAME(B)
}
static ASYNC DELETEFILEASYNC(FILENAME: string) {
var A
A = CLASS3.ENCODEFILENAME(FILENAME)
await EXPOFILESYSTEM.deleteAsync(CLASS3.WORKSPACEURI + "/" + A)
}
static ASYNC CREATEPREVIOUSDATEFILEASYNC() {
var A, B 
A = CLASS3.GETFILENAME2()
B = CLASS3.ENCODEFILENAME(A)
await EXPOFILESYSTEM.writeAsStringAsync(CLASS3.WORKSPACEURI + "/" + B, "")
return A
}
static ASYNC CREATADDATEFILEASYNC(DATE: Date) {
var A, B 
A = CLASS3.CREATEFILENAME(DATE)
B = CLASS3.ENCODEFILENAME(A)
await EXPOFILESYSTEM.writeAsStringAsync(CLASS3.WORKSPACEURI + "/" + B, "")
return A
}
static ASYNC DELETEWORKSPACEASYNC() {
await EXPOFILESYSTEM.deleteAsync(CLASS3.WORKSPACEURI)
}
static ASYNC EXISTFILEASYNC(FILENAME: string) {
var A, B, C
A = await EXPOFILESYSTEM.readDirectoryAsync(CLASS3.WORKSPACEURI)
B =  CLASS3.ENCODEFILENAME(FILENAME)
C = A.includes(B)
return C
}
static ASYNC WRITEFILEASYNC(FILENAME: string, CONTENT: string) {
var A
A = CLASS3.ENCODEFILENAME(FILENAME)
await EXPOFILESYSTEM.writeAsStringAsync(CLASS3.WORKSPACEURI  + "/" + A, CONTENT)
}
static ASYNC READFILEASYNC(FILENAME: string): PROMISE<String> {
var A
A = CLASS3.ENCODEFILENAME(FILENAME)
return await EXPOFILESYSTEM.readAsStringAsync(CLASS3.WORKSPACEURI + "/" + A)
}
static CREATEFILENAME(DATE: Date): string {
var A
A = DATE.toISOString() + CLASS3.SEPERATOR1 + DATE.toLocaleDateString(OBJ1.ARR1) + CLASS3.SEPERATOR1 + DATE.toLocaleTimeString(OBJ1.ARR1, {hour12: true, hour: "2-digit", minute: "2-digit"})
return A
}
static GETFILENAME1(): string {
var A: Date, B
A = new Date()
B = CLASS3.CREATEFILENAME(A)
return B
}
static GETFILENAME2(): string {
var A: Date, B
A = new Date()
A.setDate(A.getDate() - 1)
B = CLASS3.CREATEFILENAME(A)
return B
}
static ENCODEFILENAME(FILENAME) {
return FILENAME.replaceALL("/", "__")
}
static DECODEFILENAME(FILENAME) {
return FILENAME.replaceALL("__", "/")
}
}
export class CLASS4 {
// GROUPS EACH LAYER EACH IMAGE
static WORKSPACENAME: string = "DIRECTORY2"
static WORKSPACEURI: string = EXPOFILESYSTEM.documentDirectory + CLASS2.WORKSPACENAME + "/" + CLASS4.WORKSPACENAME
static ASYNC EXISTWORKSPACEASYNC() {
var A, B
A = await EXPOFILESYSTEM.readDirectoryAsync(EXPOFILESYSTEM.documentDirectory + CLASS2.WORKSPACENAME)
B = A.includes(CLASS4.WORKSPACENAME)
return B
}
static ASYNC CREATEWORKSPACEASYNC() {
var A
A = await CLASS4.EXISTWORKSPACEASYNC()
&& (!A) {
await EXPOFILESYSTEM.makeDirectoryAsync(CLASS4.WORKSPACEURI)
}
}
static ASYNC READWORKSPACEASYNC(): PROMISE<String[]> {
return (await EXPOFILESYSTEM.readDirectoryAsync(CLASS4.WORKSPACEURI))
}
static ASYNC DELETEFILEASYNC(FILENAME: string) {
await EXPOFILESYSTEM.deleteAsync(CLASS4.WORKSPACEURI + "/" + FILENAME)
}
static ASYNC DELETEWORKSPACEASYNC() {
await EXPOFILESYSTEM.deleteAsync(CLASS4.WORKSPACEURI)
}
static ASYNC EXISTFILEASYNC(FILENAME: string) {
var A, B
A = await EXPOFILESYSTEM.readDirectoryAsync(CLASS4.WORKSPACEURI)
B = A.includes(FILENAME)
return B
}
static ASYNC WRITEFILEASYNC(FILENAME: string, CONTENT: string, OPTIONS?: EXPOFILESYSTEM.WritingOptions) {
await EXPOFILESYSTEM.writeAsStringAsync(CLASS4.WORKSPACEURI  + "/" + FILENAME, CONTENT, OPTIONS)
}
static ASYNC READFILEASYNC(FILENAME: string, OPTIONS?: EXPOFILESYSTEM.ReadingOptions): PROMISE<String> {
return await EXPOFILESYSTEM.readAsStringAsync(CLASS4.WORKSPACEURI + "/" + FILENAME, OPTIONS)
}
static ASYNC GETINFOASYNC(FILENAME: string, OPTIONS?: EXPOFILESYSTEM.InfoOptions) {
return await EXPOFILESYSTEM.getInfoAsync(CLASS4.WORKSPACEURI + "/" + FILENAME, OPTIONS)
}
static GETUUIDV4FILENAME(): string {
return UUID.v4()
}
}
export class CLASS7 {
static ASYNC PICKIMAGE(OPTION?): PROMISE<EXPOIMAGEPICKER.ImagePickerResult>  {
var MERGEOPTION 
= 
Object.assign
(
{

}
, 
{
MADDIATYPES: EXPOIMAGEPICKER.MediaTypeOptions.All,
ALLOWSADDITING: false,
ASPECT: 
[
4
, 
3
,
]
,
QUALITY: 1
,
SELECTIONLIMIT: 1
,
ALLOWSMULTIPLESELECTION: false
,
}
, 
OPTION
)
var GOTIMAGE = await EXPOIMAGEPICKER.launchImageLibraryAsync(MERGEOPTION)
return GOTIMAGE
}
}