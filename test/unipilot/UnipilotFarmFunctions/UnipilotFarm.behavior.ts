import { expect } from "chai";

export function shouldBehaveLikeUnipilotFarm(): void {
  it("should return the new greeting once it's changed", async function () {
    // expect(await this.greeter.connect(this.signers.admin).greet()).to.equal("Hello, world!");

    // await this.greeter.setGreeting("Bonjour, le monde!");
    // expect(await this.greeter.connect(this.signers.admin).greet()).to.equal("Bonjour, le monde!");
    console.log("Deploy Successfully with address of", this.unipilotFarm.address);
  });
}
