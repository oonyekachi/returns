class Store

  include React::Component
  include React::IsomorphicHelpers

  export_state :store

  class << self

    def add_item(key, value)
      store![key] = value
    end

    def retrieve_item(key)
      store[key]
    end

    def delete_item(key)
      store!.delete(key)
    end

    def each(&block)
      store.each &block
    end

    def commit
    end

    def init
      store!({step: 0})
    end
  end

  before_first_mount do
    Store.init
  end

end
