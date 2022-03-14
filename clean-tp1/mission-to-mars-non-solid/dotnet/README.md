>
 ``` powershell
  pushd
 # création de la solution et des projets
 dotnet new sln --name mission-to-mars
 dotnet new classlib --name mission-to-mars
 dotnet new nunit --name mission-to-mars-tests
 dotnet sln add mission-to-mars
 dotnet sln add mission-to-mars-tests
 # ajout des références du projet de test
 cd mission-to-mars-tests
 dotnet add reference ../mission-to-mars
 dotnet add package Shouldly

 popd
 ls
 ```