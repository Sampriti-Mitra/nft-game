const CONTRACT_ADDRESS = '0x4eEb39b23EF88935e26fA9762f6d1C6293C844A5';

const transformCharacterData = (characterData) => {
  return {
    name: characterData.name,
    imageURI: characterData.imageURI,
    hp: characterData.remainingHealth.toNumber(),
    maxHp: characterData.maxHealth.toNumber(),
    attackDamage: characterData.attackPower.toNumber(),
  };
};

const transformBossData = (bossData) => {
  return {
    name: bossData.name,
    imageURI: bossData.imageURI,
    hp: bossData.hp.toNumber(),
    maxHp: bossData.maxHp.toNumber(),
    attackDamage: bossData.attackDamage.toNumber(),
  };
};



export { CONTRACT_ADDRESS, transformCharacterData, transformBossData };