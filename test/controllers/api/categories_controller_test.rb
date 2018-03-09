require 'test_helper'

class Api::CategoriesControllerTest < ActionDispatch::IntegrationTest
  test 'should get index' do
    get api_categories_index_url
    assert_response :success
  end

  test 'should get all' do
    get api_categories_all_url
    assert_response :success
  end
end
