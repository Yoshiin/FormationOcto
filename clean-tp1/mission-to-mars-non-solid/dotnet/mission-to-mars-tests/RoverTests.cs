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
    public class RoverTests
    {
        private Rover sut;


        [Test()]
        public void InitilizationTest()
        {
            sut = new Rover(Direction.NORD, new Position(4, 4, 0));

            sut.Position.ShouldBe(new Position(4, 4, 0));
        }
        [Test]
        public void DoitAvancer1CaseVersNordSiTourneVersLeNord()
        {
            // Arrange
            sut = new Rover(Direction.NORD, new Position(4, 4, 0));

            // Act
            sut.Avancer();

            // Assert
            sut.Position.ShouldBe(new Position(4, 5, 0));
        }

        [Test]
        public void DoitAvancer1CaseVersSudSiTourneVersLeSud()
        {
            // Arrange
            sut = new Rover(Direction.SUD, new Position(4, 4, 0));

            // Act
            sut.Avancer();

            // Assert
            sut.Position.ShouldBe(new Position(4, 3, 0));
        }

        [Test]
        public void DoitAvancer1CaseVersOuestSiTourneVersLOuest()
        {
            // Arrange
            sut = new Rover(Direction.OUEST, new Position(4, 4, 0));

            // Act
            sut.Avancer();

            // Assert
            sut.Position.ShouldBe(new Position(3, 4, 0));
        }

        [Test]
        public void DoitAvancer1CaseVersEstSiTourneVersLEst()
        {
            // Arrange
            sut = new Rover(Direction.EST, new Position(4, 4, 0));

            // Act
            sut.Avancer();

            // Assert
            sut.Position.ShouldBe(new Position(5, 4, 0));
        }

        [Test]
        public void DoitReculer1CaseVersSudSiTourneVersLeNord()
        {
            // Arrange
            sut = new Rover(Direction.NORD, new Position(4, 4, 0));

            // Act
            sut.Reculer();

            // Assert
            sut.Position.ShouldBe(new Position(4, 3, 0));
        }

        [Test]
        public void DoitReculer1CaseVersNordSiTourneVersLeSud()
        {
            // Arrange
            sut = new Rover(Direction.SUD, new Position(4, 4, 0));

            // Act
            sut.Reculer();

            // Assert
            sut.Position.ShouldBe(new Position(4, 5, 0));
        }

        [Test]
        public void DoitReculer1CaseVersEstSiTourneVersLOuest()
        {
            // Arrange
            sut = new Rover(Direction.OUEST, new Position(4, 4, 0));

            // Act
            sut.Reculer();

            // Assert
            sut.Position.ShouldBe(new Position(5, 4, 0));
        }

        [Test]
        public void DoitReculer1CaseVersOuestSiTourneVersLEst()
        {
            // Arrange
            sut = new Rover(Direction.EST, new Position(4, 4, 0));

            // Act
            sut.Reculer();

            // Assert
            sut.Position.ShouldBe(new Position(3, 4, 0));
        }


        [Test]
        public void NeDoitPasMonter()
        {
            // Arrange
            sut = new(default, new(0, 0, 0));

            // Act + Assert
            Should.Throw<NotImplementedException>(() =>
            {
                sut.Monter();
            });
        }

        [Test]
        public void NeDoitPasDescendre()
        {
            // Arrange
            sut = new(default, new(0, 0, 0));

            // Act + Assert
            Should.Throw<NotImplementedException>(() =>
            {
                sut.Descendre();
            });
        }
    }
}