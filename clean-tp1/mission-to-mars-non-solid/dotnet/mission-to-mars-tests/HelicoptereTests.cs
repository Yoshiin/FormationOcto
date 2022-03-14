using NUnit.Framework;
using mission_to_mars;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Shouldly;

namespace mission_to_mars.Tests
{
    [TestFixture()]
    public class HelicoptereTests
    {
        private Helicoptere sut;
        [Test()]
        public void InitilizationTest()
        {
            sut = new Helicoptere(Direction.NORD, new Position(4, 4, 0));

            sut.Position.ShouldBe(new Position(4, 4, 0));
        }
        [Test]
        public void DoitAvancer1CaseVersNordSiTourneVersLeNord()
        {
            // Arrange
            sut = new Helicoptere(Direction.NORD, new Position(4, 4, 1));

            // Act
            sut.Avancer();

            // Assert
            sut.Position.ShouldBe(new Position(4, 5, 1));
        }

        [Test]
        public void DoitAvancer1CaseVersSudSiTourneVersLeSud()
        {
            // Arrange
            sut = new Helicoptere(Direction.SUD, new Position(4, 4, 1));

            // Act
            sut.Avancer();

            // Assert
            sut.Position.ShouldBe(new Position(4, 3, 1));
        }

        [Test]
        public void DoitAvancer1CaseVersOuestSiTourneVersLOuest()
        {
            // Arrange
            sut = new Helicoptere(Direction.OUEST, new Position(4, 4, 1));

            // Act
            sut.Avancer();

            // Assert
            sut.Position.ShouldBe(new Position(3, 4, 1));
        }

        [Test]
        public void DoitAvancer1CaseVersEstSiTourneVersLEst()
        {
            // Arrange
            sut = new Helicoptere(Direction.EST, new Position(4, 4, 1));

            // Act
            sut.Avancer();

            // Assert
            sut.Position.ShouldBe(new Position(5, 4, 1));
        }

        [Test]
        public void DoitReculer1CaseVersSudSiTourneVersLeNord()
        {
            // Arrange
            sut = new Helicoptere(Direction.NORD, new Position(4, 4, 1));

            // Act
            sut.Reculer();

            // Assert
            sut.Position.ShouldBe(new Position(4, 3, 1));
        }

        [Test]
        public void DoitReculer1CaseVersNordSiTourneVersLeSud()
        {
            // Arrange
            sut = new Helicoptere(Direction.SUD, new Position(4, 4, 1));

            // Act
            sut.Reculer();

            // Assert
            sut.Position.ShouldBe(new Position(4, 5, 1));
        }

        [Test]
        public void DoitReculer1CaseVersEstSiTourneVersLOuest()
        {
            // Arrange
            sut = new Helicoptere(Direction.OUEST, new Position(4, 4, 1));

            // Act
            sut.Reculer();

            // Assert
            sut.Position.ShouldBe(new Position(5, 4, 1));
        }

        [Test]
        public void DoitReculer1CaseVersOuestSiTourneVersLEst()
        {
            // Arrange
            sut = new Helicoptere(Direction.EST, new Position(4, 4, 1));

            // Act
            sut.Reculer();

            // Assert
            sut.Position.ShouldBe(new Position(3, 4, 1));
        }


        [Test]
        public void DoitMonter1CaseVersLeHaut()
        {
            // Arrange
            sut = new(default, new Position(0, 0, 0));

            // Act
            sut.Monter();
            
            // Assert
            sut.Position.ShouldBe(new Position(0, 0, 1));

        }

        [Test]
        public void DoitDescendre1CaseVersLeBas()
        {
            // Arrange
            sut = new(default, new(0, 0, 2));

            // Act
            sut.Descendre();

            // Assert
            sut.Position.ShouldBe(new Position(0, 0, 1));
        }
    }
}