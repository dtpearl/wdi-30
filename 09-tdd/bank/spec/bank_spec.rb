require_relative '../bank'

describe Bank do
  let(:bank) { Bank.new 'TDD Bank' }
  # "." denotes a class method
  describe '.new' do
    it "creates a new bank object" do
      expect(bank).to_not be nil
    end

    it "assigns a bank a name" do
      expect(bank.name).to eq 'TDD Bank'
    end
  end

  # "#" denotes an instance method
  describe '#create_account' do
    it "creates an account for a particular person" do
      bank.create_account 'Craigsy', 7
      expect(bank.accounts['Craigsy']).to eq 7
    end
  end

  describe '#deposit' do
    it "deposits an amount into a particular account" do
      bank.create_account 'Jonesy', 200
      bank.deposit 'Jonesy', 300
      expect(bank.accounts['Jonesy']).to eq 200+300
    end
  end

  describe '#withdraw' do
    it 'withdraws an amount from a particular account' do
      bank.create_account 'Bazza', 200
      bank.withdraw 'Bazza', 50
      expect(bank.accounts['Bazza']).to eq 200-50
    end

    it 'ignores withdrawals that exceed the balance' do
      bank.create_account 'Charlie', 1
      bank.withdraw 'Charlie', 1_000_000
      expect(bank.balance 'Charlie').to eq 1
    end
  end

  describe '#balance' do
    it 'returns the balance for some particular account' do
      bank.create_account 'Mad Robby', 500
      expect(bank.balance 'Mad Robby').to eq 500
    end
  end
end
