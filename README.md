# Lab 5 - Starter
Team Members (One Man Army): Sahil Dalal

1. No, because this feature likely has a lot of moving parts. In testing the message feature, one must test the component of a user writing a message, a user sending a message, and the other user receiving the message. This implies too many steps, making it not feasible to run a unit test for. Unit tests are typically to test individual parts of the code, and this has too many parts. 
2. Yes, as this feature is very targetted. It is related to the component of writing a message, and is in this encapsulated unit. No other components come into play to test this component so it would make sense to run a unit test, i.e. a simple check whether `len(messageLength) > 80`.
